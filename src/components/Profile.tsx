import Form from "../utils/Form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, updateProfile, type User } from "firebase/auth";
import { toast } from "react-toastify";
import { getSavedUserData, saveUserData } from "../utils/utils";
import Loader from "./Loader";
import { db } from "../Auth/firebaseconfig";

type ProfileFormData = {
  name: string;
  email: string;
  address: string;
  phone: string;
  profileImage?: FileList;
};

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const { displayName, email, uid } = auth.currentUser as User;

  const { userData, context } = getSavedUserData(uid);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>();
  const [profileImagePreview, setProfileImagePreview] = useState(
    userData?.photoURL?.base64 || ""
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result;
        setProfileImagePreview(base64 as string);
      };

      reader.onerror = (error) => {
        console.log(error);
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    console.log(data.name);

    setLoading(true);
    try {
      await updateProfile(auth.currentUser as User, {
        displayName: watch("name"),
      });

      const userRef = doc(db, "users", uid);

      await updateDoc(userRef, {
        photoURL: { base64: profileImagePreview },
        name: watch("name"),
        number: watch("phone"),
        address: watch("address"),
      });

      await auth.currentUser?.reload();
      const user = auth.currentUser;

      const updatedUserDoc = await getDoc(userRef);
      const updData = updatedUserDoc.exists() ? updatedUserDoc.data() : {};

      const updUser = {
        ...userData,
        displayName: user?.displayName as string,
        email: user?.email as string,
        emailVerified: user?.emailVerified as boolean,
        uid: user?.uid as string,
        ...updData,
      };

      saveUserData(uid, context, updUser);

      toast.success("Profile update successful");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 mb-14">
      <h1 className="text-2xl font-semibold mb-6 text-primary-color">
        Profile
      </h1>

      <Form onSubmit={handleSubmit(onSubmit)} formId="profileForm">
        {/* Profile Image Upload */}
        <div className="flex flex-col items-start">
          <div className="w-24 h-24 rounded-full overflow-hidden border mb-3">
            {profileImagePreview ? (
              <img
                src={profileImagePreview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-primary-color flex items-center justify-center text-white text-2xl md:text-[70px]">
                {userData?.displayName?.charAt(0)}
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            {...register("profileImage", { required: "Profile Photo needed" })}
            onChange={(e) => {
              handleImageChange(e);
            }}
            className="text-sm border p-4 max-w-[200px] w-full rounded-md border-gray-500 cursor-pointer text-primary-color"
          />
          {errors.profileImage && (
            <p className="text-sm text-red-500">
              {errors.profileImage.message}
            </p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">Name</label>
          <input
            type="text"
            // disabled
            defaultValue={displayName as string}
            placeholder="Enter your name"
            {...register("name", { required: "name is required" })}
            onKeyDown={(e) => {
              if (e.key === "," || ".") {
                e.preventDefault();
              }
            }}
            className="w-full border border-gray-400 rounded p-2 capitalize "
          />

          {errors.name && (
            <p className="text-sm text-red-500 ">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">Email</label>
          <input
            type="email"
            disabled
            readOnly
            value={email as string}
            placeholder="Enter your email"
            {...register("email", { required: "email is required" })}
            className="w-full border border-gray-400 bg-gray-200 text-gray-900 text-lg font-light rounded p-2"
          />
          {errors.email && (
            <p className="text-sm text-red-500 ">{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Address
          </label>
          <textarea
            defaultValue={userData?.address}
            placeholder="Enter your address"
            {...register("address", { required: "Address is required" })}
            className="w-full border-gray-400 border rounded p-2"
            rows={3}
          ></textarea>
          {errors.address && (
            <p className="text-sm text-red-500 ">{errors.address.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            defaultValue={userData?.number}
            placeholder="Enter your phone number"
            {...register("phone", { required: "phone is required" })}
            className="w-full border border-gray-400 rounded p-2"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 ">{errors.phone.message}</p>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-primary-color text-white px-6 py-2 rounded"
          >
            {loading ? <Loader /> : "Save Profile"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Profile;

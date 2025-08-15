import Form from "../utils/Form";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { db, auth } from "../Auth/firebaseconfig";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

type ProfileFormData = {
  name: string;
  email: string;
  address: string;
  phone: string;
  profileImage?: FileList;
};

const Profile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>();
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null
  );
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    if (!userId) {
      toast.error("user must be logged in");
      return;
    }

    try {
      await setDoc(doc(db, "users", userId), {
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone,
        profileImage: profileImagePreview || null,
        updatedAt: new Date(),
      });

      alert("Profile updated successfully!");
      reset();
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
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
              <div className="w-full h-full bg-primary-color flex items-center justify-center text-white md:text-lg">
                No Image
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            {...register("profileImage")}
            onChange={(e) => {
              handleImageChange(e);
            }}
            className="text-sm border p-4 rounded-md border-gray-500 cursor-pointer text-primary-color"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "name is required" })}
            className="w-full border border-gray-400 rounded p-2"
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
            placeholder="Enter your email"
            {...register("email", { required: "email is required" })}
            className="w-full border border-gray-400 rounded p-2"
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
            Save Profile
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Profile;

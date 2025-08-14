/**
 * Formats a number to currency (e.g., ₦1,200.00)
 * @param price - The number to format
 * @param currency - Optional currency code (default is NGN)
 */
export const formatPrice = (
  price: number,
  currency: string = "NGN"
): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price);
};

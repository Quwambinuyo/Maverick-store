/**
 * Formats a number to a currency string (e.g. ₦1,200.00)
 * @param price - The price number to format
 * @param currency - Optional currency code (default is NGN)
 * @returns formatted currency string
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

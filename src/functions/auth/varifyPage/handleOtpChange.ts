const handleOtpChange = ({
  text,
  index,
  otp,
  setOtp,
  inputRefs,
}: {
  text: string;
  index: number;
  otp: any;
  setOtp: any;
  inputRefs: any;
}) => {
  if (text.length <= 1) {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  }
};
export default handleOtpChange;

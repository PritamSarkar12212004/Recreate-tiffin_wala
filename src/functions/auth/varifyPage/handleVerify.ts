import RoutesConst from '../../../constants/routes/RoutesConst';

const handleVerify = ({ otp, navigation }: any) => {
  const otpCode = otp.join('');
  if (otpCode.length === 4) {
    console.log('Verifying OTP:', otpCode);
    navigation.navigate(RoutesConst.MAIN_SCREEN.MAIN);
  }
};

export default handleVerify;

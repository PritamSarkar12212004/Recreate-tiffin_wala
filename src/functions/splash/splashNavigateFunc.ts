import RoutesConst from '../../constants/routes/RoutesConst';
import StorageToken from '../../constants/token/StorageToken';
import writeStorage from '../helper/storage/writeStorage';

const splashNavigateFunc = (navigation: any) => {
  writeStorage({ key: StorageToken.SPLASH_TOKEN.DATA, value: true }).then(
    () => {
      navigation.navigate(RoutesConst.AUTH_ROUTE.MAIN, {
        screen: RoutesConst.AUTH_ROUTE.AUTH_SCREEN,
      });
    },
  );
};
export default splashNavigateFunc;

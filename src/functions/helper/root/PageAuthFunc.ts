import RoutesConst from '../../../constants/routes/RoutesConst';
import StorageToken from '../../../constants/token/StorageToken';
import readStorage from '../storage/readStorage';

const PageAuthFunc = async ({
  setData,
  setInitialRoute,
}: {
  setData: any;
  setInitialRoute: any;
}) => {
  const splash = await readStorage({ key: StorageToken.SPLASH_TOKEN.DATA });
  const auth = await readStorage({ key: StorageToken.AUTH_TOKEN.DATA });
  if (!splash) {
    setInitialRoute(RoutesConst.SPLASH_ROUTE.FIRST_SCREEN);
    setData(RoutesConst.SPLASH_ROUTE.FIRST_SCREEN);
  } else if (splash) {
    auth
      ? null
      : (setInitialRoute(RoutesConst.AUTH_ROUTE.MAIN),
        setData(RoutesConst.AUTH_ROUTE.MAIN));
  }
};
export default PageAuthFunc;

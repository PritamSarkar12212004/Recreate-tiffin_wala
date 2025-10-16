import { storage } from '../../../utils/storage/Storage';

const deleteStorage = async ({ key }: any) => {
  try {
    storage.delete(key);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default deleteStorage;

type InfoType = {
  id: number;
  name: string;
  email: string;
};
type AdminInfoList = InfoType & {
  isAdmin: boolean;
};

export { type InfoType, type AdminInfoList };

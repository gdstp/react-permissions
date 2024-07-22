import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Permissions, userPermissions } from "../permissions";

interface PermissionContextType {
  permissions: Permissions[];
  get: (permission: Permissions) => boolean;
  set: (permission: Permissions) => void;
}

const PermissionContext = createContext<PermissionContextType | null>(null);

export const PermissionProvider = ({ children }: PropsWithChildren) => {
  const [permissions, setPermissions] = useState<Permissions[]>(userPermissions);

  const get = (permission: Permissions) => permissions.includes(permission);

  const set = (permission: Permissions) => {
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((p) => p !== permission));
    } else {
      setPermissions([...permissions, permission])
    }
  };

  return (
    <PermissionContext.Provider value={{ set, get, permissions }}>
      {children}
    </PermissionContext.Provider>
  );

}

export const usePermissionContext = () => {
  const ctx = useContext(PermissionContext);

  if (!ctx)
    throw new Error(
      "usePermissionContext must be used within PermissionContext.Provider"
    );

  return ctx;
};

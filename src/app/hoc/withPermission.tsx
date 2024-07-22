import React from "react";
import { Permissions } from "../permissions";
import { usePermissionContext } from "../context/PermissionContext";

type permissions = {
  permissions: Permissions[];
};

type Props = {
  disable?: boolean;
};

export function withPermission<T>(Component: React.FC<T>, options?: Props) {
  const ComponentWithPermission: React.FC<
    T & React.Attributes & permissions
  > = (props) => {
    const { get } = usePermissionContext();
    const hasPermissions = props.permissions.every((permission) =>
      get(permission)
    );

    if (hasPermissions) {
      return <Component {...props} />;
    } else if (!hasPermissions && options?.disable) {
      return (
        <Component
          {...props}
          disabled={options.disable}
          className="opacity-50"
        />
      );
    }

    return <React.Fragment />;
  };

  return ComponentWithPermission;
}

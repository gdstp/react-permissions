"use client";

import { usePermissionContext } from "../context/PermissionContext";
import { Permissions } from "../permissions";

export const Checkbox = ({ value }: { value: Permissions }) => {
  const { get, set } = usePermissionContext();

  return (
    <div className="flex items-center mb-4">
      <input
        checked={get(value)}
        id="default-checkbox"
        type="checkbox"
        onChange={() => set(value)}
        value={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-sm font-medium text-gray-900"
      >
        {value}
      </label>
    </div>
  );
};

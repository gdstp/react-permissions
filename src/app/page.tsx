'use client'

import { Button as OriginalButton } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Content as OriginalContent } from "./components/Content";
import { Input as OriginalInput } from "./components/Input";
import { Navbar as OriginalNavbar } from "./components/Navbar";
import { withPermission } from "./hoc/withPermission";
import { Permissions } from "./permissions";

const Button = withPermission(OriginalButton, { disable: true });
const Content = withPermission(OriginalContent);
const Navbar = withPermission(OriginalNavbar);
const Input = withPermission(OriginalInput);

export default function Home() {
  return (
    <div className="w-full h-screen relative flex flex-col gap-20 justify-center items-center">
      <Navbar permissions={[Permissions.VIEW_NAVBAR]} />

      <div className="flex gap-10 items-center h-32">
        <Content permissions={[Permissions.VIEW_CONTENT]} />

        <Input permissions={[Permissions.VIEW_INPUT]} placeholder="Watch me disappear" />

        <Button permissions={[Permissions.VIEW_BUTTON]} className="text-white" onClick={() => window.alert("Clicked!")}>
          Click me, if you can!
        </Button>
      </div>

      <div className="flex gap-4">
        <Checkbox value={Permissions.VIEW_NAVBAR} />
        <Checkbox value={Permissions.VIEW_CONTENT} />
        <Checkbox value={Permissions.VIEW_BUTTON} />
        <Checkbox value={Permissions.VIEW_INPUT} />
      </div>
    </div>
  );
}

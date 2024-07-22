import { Button as OriginalButton } from "./components/Button";
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
    <div className="w-full h-screen relative flex flex-col gap-4 justify-center items-center">
      <Navbar permissions={[Permissions.VIEW_NAVBAR]} />
      <Input permissions={[Permissions.VIEW_INPUT]} />
      <Button permissions={[Permissions.VIEW_BUTTON]}>You can see but you can`t click</Button>
      <Content permissions={[Permissions.VIEW_CONTENT]}>This is a test</Content>
    </div>
  );
}

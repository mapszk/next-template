import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="top-0 sticky py-4 lg:py-5">
      <Container className="flex">
        <Image
          src="/basement_iso.svg"
          alt="Basement logo"
          className="lg:hidden"
          width={42}
          height={40}
        />
        <Image
          src="/basement_logo.svg"
          alt="Basement logo"
          className="hidden lg:block mr-auto"
          width={192}
          height={28}
        />
        <Image
          src="/navbar_icons.svg"
          alt="Icons"
          className="hidden lg:block"
          width={284}
          height={24}
        />
        <Button className="ml-auto">CART [0]</Button>
      </Container>
    </nav>
  );
}

import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

export const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      color: "white.100",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

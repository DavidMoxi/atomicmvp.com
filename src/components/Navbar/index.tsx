import { NavLink, Stack } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <Stack>
      <NavLink
        component={Link}
        href="/"
        leftSection={<IconHome size={16} stroke={1.5} />}
        label={t("home")}
      />
    </Stack>
  );
}

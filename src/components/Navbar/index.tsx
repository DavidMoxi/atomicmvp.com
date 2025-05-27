import { Group, NavLink, Stack } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <Stack>
      <Group hiddenFrom="xs" justify="center">
        <NavLink href="/es" label={"Español"} w="auto" />
        <NavLink href="/en" label={"English"} w="auto" />
      </Group>
      <NavLink
        component={Link}
        href="/"
        leftSection={<IconHome size={16} stroke={1.5} />}
        label={t("home")}
      />
      <NavLink label="Projects" childrenOffset={28} href="#projects">
        <NavLink label="Fast-battle" href="/packages/fast-battle" />
      </NavLink>
    </Stack>
  );
}

import { Burger, Group, Title, NavLink } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Header({
  opened,
  toggle,
}: {
  opened: boolean;
  readonly toggle: () => void;
}) {
  const t = useTranslations("Header");

  return (
    <Group h="100%" justify="space-between">
      <Group px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Title order={1} c="gray.5" fw={700}>
          {t("title")}
        </Title>
      </Group>
      <Group>
        <NavLink href="/es" label={"Español"} w="auto" />
        <NavLink href="/en" label={"English"} w="auto" />
      </Group>
    </Group>
  );
}

"use client";
import { AppShell, Burger, Group, Skeleton, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslations } from "next-intl";

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const t = useTranslations("HomePage");

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={2} c="gray.8" fw={700}>
            {t("title")}
          </Title>
          <Text size="md" c="gray.6" fw={500}>
            {t("slogan")}
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        <Skeleton h={28} mt="sm" animate={false} />
        <Skeleton h={28} mt="sm" animate={false} />
        <Skeleton h={28} mt="sm" animate={false} />
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

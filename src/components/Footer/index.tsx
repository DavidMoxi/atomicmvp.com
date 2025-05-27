import { Group, NavLink } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <Group px="md" justify="end">
      {t.rich("author", {
        email: (chunks) => (
          <NavLink
            href="mailto:maxheredia95@gmail.com"
            label={chunks}
            w="auto"
          />
        ),
        address: "maxheredia95@gmail.com",
      })}
    </Group>
  );
}

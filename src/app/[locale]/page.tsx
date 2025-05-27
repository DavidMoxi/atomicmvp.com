import {
  Container,
  Title,
  Text,
  Stack,
  Card,
  Divider,
  NavLink,
} from "@mantine/core";
import { useTranslations } from "next-intl";
import packageJson from "../../../package.json";
import Link from "next/link";

/**
 * Home page – minimal, translated.
 * Explains the intention of atomicmvp.com and the meaning behind the name.
 */
export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        {/* Domain explanation */}
        <Card shadow="sm" radius="md" withBorder>
          <Title order={3} mb="xs">
            {t("faq.why.title")}
          </Title>
          <Text>{t("faq.why.description")}</Text>

          <Divider size="xs" my="xs" />

          <Title order={3} mb="xs">
            {t("faq.who.title")}
          </Title>
          <Text>{t("faq.who.description")}</Text>
          <NavLink
            component={Link}
            href="/about"
            style={{ color: "cyan", textDecoration: "underline dotted" }}
            label={t("faq.who.more")}
          />
        </Card>

        {/* package.json excerpt */}
        <Card shadow="sm" radius="md" withBorder>
          <Title order={3} mb="xs">
            {t("packageJson.title")}
          </Title>
          <Text>{t("packageJson.description")}</Text>
          <pre>
            {JSON.stringify(
              {
                name: packageJson.name,
                author: packageJson.author,
                dependencies: packageJson.dependencies,
                devDependencies: packageJson.devDependencies,
              },
              null,
              2
            )}
          </pre>
        </Card>
      </Stack>
    </Container>
  );
}

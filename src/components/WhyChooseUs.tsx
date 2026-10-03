"use client";
import { Row, Text, Flex, Column } from "@once-ui-system/core";
import { features } from "@/resources/data/features";
import {
  CertificateIcon,
  ClockIcon,
  LockIcon,
  TrendUpIcon,
  CurrencyDollarIcon,
  HandshakeIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

const iconMap: Record<string, Icon> = {
  CertificateBadge: CertificateIcon,
  Clock: ClockIcon,
  Lock: LockIcon,
  TrendUp: TrendUpIcon,
  CurrencyDollar: CurrencyDollarIcon,
  Handshake: HandshakeIcon,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <Flex
      fillWidth
      direction="column"
      horizontal="center"
      paddingX="l"
      paddingY="xl"
      id="why-choose-us"
      gap="xl"
    >
      <Column maxWidth={64} fillWidth horizontal="center" gap="s">
        <Text
          variant="label-default-m"
          onBackground="neutral-weak"
          className="section-eyebrow"
        >
          WHY NEXUS
        </Text>
        <Text
          variant="display-default-m"
          onBackground="neutral-strong"
          className="section-title"
          style={{ textAlign: "center" }}
        >
          More than a vendor.
          <br /> A technology partner.
        </Text>
        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
          style={{ textAlign: "center", maxWidth: "48ch" }}
        >
          We combine deep technical expertise with a relentless focus on your
          business outcomes. Here's what sets us apart.
        </Text>
      </Column>

      <Column fillWidth maxWidth="m" gap="m" id="featuresGrid">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon] ?? ClockIcon;
          return (
            <Row
              key={index}
              className="feature-card"
              padding="l"
              gap="m"
              vertical="start"
              fillWidth
            >
              <div className="feature-icon-wrapper">
                <IconComponent size={24} weight="duotone" />
              </div>
              <Column gap="xs" fillWidth flex={1}>
                <Text
                  variant="heading-default-m"
                  onBackground="neutral-strong"
                >
                  {feature.title}
                </Text>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {feature.description}
                </Text>
              </Column>
            </Row>
          );
        })}
      </Column>
    </Flex>
  );
};

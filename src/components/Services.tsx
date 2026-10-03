"use client";
import { Row, Text, Flex, Column } from "@once-ui-system/core";
import { services } from "@/resources/data/services";
import {
  CloudIcon,
  ShieldIcon,
  WrenchIcon,
  ChartBarIcon,
  CodeIcon,
  HeadsetIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

const iconMap: Record<string, Icon> = {
  Cloud: CloudIcon,
  Shield: ShieldIcon,
  Wrench: WrenchIcon,
  ChartBar: ChartBarIcon,
  Code: CodeIcon,
  Headset: HeadsetIcon,
};

export const Services: React.FC = () => {
  return (
    <Flex
      fillWidth
      direction="column"
      horizontal="center"
      paddingX="l"
      paddingY="xl"
      id="services"
      gap="xl"
    >
      <Column maxWidth={64} fillWidth horizontal="center" gap="s">
        <Text
          variant="label-default-m"
          onBackground="neutral-weak"
          className="section-eyebrow"
        >
          WHAT WE DO
        </Text>
        <Text
          variant="display-default-m"
          onBackground="neutral-strong"
          className="section-title"
          style={{ textAlign: "center" }}
        >
          Comprehensive IT solutions,
          <br /> delivered with precision
        </Text>
        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
          style={{ textAlign: "center", maxWidth: "48ch" }}
        >
          Whether you need a full managed IT partner or specialized expertise for a
          specific initiative, our six core service areas cover the full technology
          lifecycle.
        </Text>
      </Column>

      <Column fillWidth maxWidth="m" gap="m" id="servicesGrid">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon] ?? CloudIcon;
          return (
            <Column
              key={index}
              className="service-card"
              padding="l"
              gap="m"
              fillWidth
            >
              <Row gap="m" vertical="start" fillWidth>
                <div className="service-icon-wrapper">
                  <IconComponent size={28} weight="duotone" />
                </div>
                <Column gap="xs" fillWidth flex={1}>
                  <Text
                    variant="heading-default-l"
                    onBackground="neutral-strong"
                  >
                    {service.title}
                  </Text>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                  >
                    {service.description}
                  </Text>
                </Column>
              </Row>
              <Row gap="s" wrap id="serviceFeatures">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="feature-pill">
                    <Text variant="label-default-xs" onBackground="neutral-medium">
                      {feature}
                    </Text>
                  </div>
                ))}
              </Row>
            </Column>
          );
        })}
      </Column>
    </Flex>
  );
};

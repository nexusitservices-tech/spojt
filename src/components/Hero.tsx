"use client";
import {
  Row,
  Text,
  Flex,
  Button,
  Column,
} from "@once-ui-system/core";
import {
  ArrowUpRightIcon,
  ShieldCheckIcon,
  LightningIcon,
  GlobeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { links } from "@/resources/constants/links";

export const Hero: React.FC = () => {
  return (
    <Column
      fillWidth
      paddingX="l"
      paddingY="xl"
      horizontal="center"
      vertical="center"
      gap="l"
      id="heroSection"
    >
      <Flex direction="row" gap="s" center className="hero-badge">
        <ShieldCheckIcon size={18} weight="fill" />
        <Text variant="label-default-xs" onBackground="neutral-weak">
          SOC 2 Type II Certified &middot; ISO 27001 Compliant
        </Text>
      </Flex>

      <Column fillWidth horizontal="center" gap="m" maxWidth={60}>
        <Text
          variant="display-default-xl"
          onBackground="neutral-strong"
          className="hero-headline"
          style={{ textAlign: "center" }}
        >
          Empowering Business Through
          <br />
          <span className="hero-gradient-text">Intelligent Technology</span>
        </Text>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          className="hero-subtext"
          style={{ textAlign: "center", maxWidth: "52ch" }}
        >
          From cloud infrastructure to cybersecurity, managed IT to data analytics,
          Nexus delivers enterprise-grade solutions that keep your business secure,
          scalable, and ahead of the curve.
        </Text>
      </Column>

      <Row gap="m" center id="heroButtons">
        <Button href={links.getStarted} size="l">
          <Row gap="xs" center>
            Schedule a Consultation <ArrowUpRightIcon weight="bold" />
          </Row>
        </Button>
        <Button variant="secondary" href={links.learnMore} size="l">
          <Row gap="xs" center>
            Explore Services <ArrowUpRightIcon weight="bold" />
          </Row>
        </Button>
      </Row>

      <Row
        fillWidth
        horizontal="center"
        gap="xl"
        paddingY="l"
        id="heroFeatureRow"
      >
        <Row gap="s" center>
          <LightningIcon size={20} weight="fill" className="hero-feature-icon" />
          <Text variant="label-default-s" onBackground="neutral-weak">
            99.99% Uptime SLA
          </Text>
        </Row>
        <Row gap="s" center>
          <GlobeIcon size={20} weight="fill" className="hero-feature-icon" />
          <Text variant="label-default-s" onBackground="neutral-weak">
            24/7 Global Support
          </Text>
        </Row>
        <Row gap="s" center>
          <ShieldCheckIcon size={20} weight="fill" className="hero-feature-icon" />
          <Text variant="label-default-s" onBackground="neutral-weak">
            Security-First Approach
          </Text>
        </Row>
      </Row>
    </Column>
  );
};

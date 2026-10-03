"use client";
import { Row, Text, Flex, Column, Button } from "@once-ui-system/core";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { links } from "@/resources/constants/links";

export const CTA: React.FC = () => {
  return (
    <Flex
      fillWidth
      direction="column"
      horizontal="center"
      paddingX="l"
      paddingY="xl"
      id="contact"
    >
      <Column
        fillWidth
        maxWidth="m"
        className="cta-card"
        padding="xl"
        horizontal="center"
        vertical="center"
        gap="l"
      >
        <Text
          variant="display-default-m"
          onBackground="neutral-strong"
          className="cta-title"
          style={{ textAlign: "center" }}
        >
          Ready to transform your IT?
        </Text>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          className="cta-subtext"
          style={{ textAlign: "center", maxWidth: "48ch" }}
        >
          Schedule a free 30-minute consultation with our solutions architects.
          We'll assess your current setup and outline a clear path forward — no
          commitment required.
        </Text>
        <Row gap="m" center id="ctaButtons">
          <Button href={links.schedule} size="l">
            <Row gap="xs" center>
              Book Your Consultation <ArrowUpRightIcon weight="bold" />
            </Row>
          </Button>
          <Button variant="secondary" href="#services" size="l">
            <Row gap="xs" center>
              View All Services
            </Row>
          </Button>
        </Row>
        <Text
          variant="label-default-xs"
          onBackground="neutral-weak"
          className="cta-note"
        >
          Or call us directly: 1-800-NEXUS-IT
        </Text>
      </Column>
    </Flex>
  );
};

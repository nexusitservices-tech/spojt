"use client";
import {
  Row,
  Text,
  IconButton,
  Column,
  SmartLink,
} from "@once-ui-system/core";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { navigationLinks } from "@/resources/data/navigation";

interface FooterProps extends React.ComponentProps<typeof Row> {}

export const Footer: React.FC<FooterProps> = ({ ...flex }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Column
      fillWidth
      horizontal="center"
      borderTop="neutral-alpha-weak"
      paddingY="l"
      paddingX="l"
      gap="l"
      id="footerSection"
      {...flex}
    >
      <Row
        maxWidth="m"
        fillWidth
        horizontal="between"
        vertical="start"
        id="footerMain"
        gap="xl"
      >
        <Column gap="m" maxWidth={32}>
          <Row center gap="s">
            <div className="nexus-logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 6L6 26L10 26L10 13L22 26L26 26L26 6L22 6L22 19L10 6L6 6Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <Text variant="heading-default-l" onBackground="neutral-strong">
              Nexus<span className="nexus-logo-accent">IT</span>
            </Text>
          </Row>
          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            style={{ maxWidth: "40ch" }}
          >
            Enterprise-grade IT services that keep your business secure, scalable,
            and ahead of the technology curve. Trusted by 500+ organizations
            worldwide since 2009.
          </Text>
          <Row gap="8" vertical="center" id="footerSocial">
            <IconButton size="s" variant="ghost" href="#" icon="github">
              <GithubLogoIcon />
            </IconButton>
            <IconButton size="s" variant="ghost" href="#" icon="linkedin">
              <LinkedinLogoIcon />
            </IconButton>
            <IconButton size="s" variant="ghost" href="#" icon="twitter">
              <XLogoIcon />
            </IconButton>
          </Row>
        </Column>

        <Column gap="s" className="footer-links">
          <Text variant="label-default-m" onBackground="neutral-strong">
            NAVIGATE
          </Text>
          {navigationLinks.map((link) => (
            <SmartLink key={link.label} href={link.href}>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {link.label}
              </Text>
            </SmartLink>
          ))}
        </Column>

        <Column gap="s" className="footer-links">
          <Text variant="label-default-m" onBackground="neutral-strong">
            SERVICES
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Cloud Infrastructure
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Cybersecurity
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Managed IT Services
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Data & Analytics
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Custom Software
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            IT Consulting
          </Text>
        </Column>

        <Column gap="s" className="footer-links">
          <Text variant="label-default-m" onBackground="neutral-strong">
            CONTACT
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            1-800-NEXUS-IT
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            hello@nexusit.com
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            100 Tech Plaza, Suite 500
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            San Francisco, CA 94105
          </Text>
        </Column>
      </Row>

      <Row
        maxWidth="m"
        fillWidth
        horizontal="between"
        vertical="center"
        id="footerBottom"
      >
        <Text variant="label-default-xs" onBackground="neutral-weak">
          &copy; {currentYear} Nexus IT Services. All rights reserved.
        </Text>
        <Row gap="m" vertical="center" id="footerLegal">
          <SmartLink href="#">
            <Text variant="label-default-xs" onBackground="neutral-weak">
              Privacy Policy
            </Text>
          </SmartLink>
          <SmartLink href="#">
            <Text variant="label-default-xs" onBackground="neutral-weak">
              Terms of Service
            </Text>
          </SmartLink>
          <SmartLink href="#">
            <Text variant="label-default-xs" onBackground="neutral-weak">
              SLA
            </Text>
          </SmartLink>
        </Row>
      </Row>
    </Column>
  );
};

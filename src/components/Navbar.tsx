"use client";
import {
  Row,
  Text,
  SmartLink,
  ThemeSwitcher,
  Button,
  DropdownWrapper,
  Column,
  NavIcon,
  Option,
} from "@once-ui-system/core";
import { navigationLinks } from "@/resources/data/navigation";
import { links } from "@/resources/constants/links";
import { nexusConfig } from "@/resources/spojt.config";

import { useState } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <Row
      fillWidth
      paddingX="l"
      horizontal="between"
      vertical="center"
      paddingY={1}
      className={className}
      id="navbarRow"
    >
      <Row center gap="m">
        <Row center gap="s">
          <div className="nexus-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 6L6 26L10 26L10 13L22 26L26 26L26 6L22 6L22 19L10 6L6 6Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            Nexus<span className="nexus-logo-accent">IT</span>
          </Text>
        </Row>
        {nexusConfig.utilities.navLinks && (
          <Row center gap="m" id="navLinks">
            {navigationLinks.map((link) => (
              <SmartLink key={link.label} href={link.href}>
                <Text variant="label-default-s">
                  <b>{link.label}</b>
                </Text>
              </SmartLink>
            ))}
          </Row>
        )}
      </Row>
      <Row center gap="m" id="navButtonsContainer">
        {nexusConfig.utilities.themeSwitcher && (
          <ThemeSwitcher id="themeSwitcher" />
        )}
        <Button
          variant="secondary"
          size="s"
          id="navButton"
          href={links.contact}
        >
          <Text variant="label-default-s">CONTACT</Text>
        </Button>
        <Button size="s" id="navButtonPrimary" href={links.getStarted}>
          <Text variant="label-default-s">GET STARTED</Text>
        </Button>

        <DropdownWrapper
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          trigger={
            <NavIcon
              id="navIcon"
              isActive={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          }
          dropdown={
            <Column
              minWidth={10}
              padding="4"
              gap="2"
              background="neutral-medium"
            >
              {navigationLinks.map((link) => (
                <Option
                  key={link.label}
                  label={link.label}
                  onClick={() => handleSelect(link.label)}
                  value={link.label}
                />
              ))}
            </Column>
          }
        />
      </Row>
    </Row>
  );
};

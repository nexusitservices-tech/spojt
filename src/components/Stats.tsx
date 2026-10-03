"use client";
import { Row, Text, Flex, Column } from "@once-ui-system/core";
import { stats } from "@/resources/data/stats";

export const Stats: React.FC = () => {
  return (
    <Flex
      fillWidth
      direction="row"
      horizontal="center"
      paddingX="l"
      paddingY="l"
      id="statsSection"
    >
      <Column maxWidth="m" fillWidth gap="l">
        <Text
          variant="heading-default-l"
          onBackground="neutral-strong"
          className="stats-heading"
          style={{ textAlign: "center" }}
        >
          Trusted by organizations worldwide
        </Text>
        <Row
          fillWidth
          horizontal="between"
          vertical="center"
          id="statsGrid"
          wrap
        >
          {stats.map((stat, index) => (
            <Column
              key={index}
              className="stat-card"
              horizontal="center"
              gap="xs"
              padding="l"
            >
              <Text
                variant="display-default-l"
                onBackground="neutral-strong"
                className="stat-value"
              >
                {stat.value}
              </Text>
              <Text
                variant="label-default-m"
                onBackground="neutral-medium"
              >
                {stat.label}
              </Text>
              <Text
                variant="label-default-xs"
                onBackground="neutral-weak"
              >
                {stat.sublabel}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
    </Flex>
  );
};

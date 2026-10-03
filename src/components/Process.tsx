"use client";
import { Row, Text, Flex, Column } from "@once-ui-system/core";
import { processSteps } from "@/resources/data/process";

export const Process: React.FC = () => {
  return (
    <Flex
      fillWidth
      direction="column"
      horizontal="center"
      paddingX="l"
      paddingY="xl"
      id="process"
      gap="xl"
    >
      <Column maxWidth={64} fillWidth horizontal="center" gap="s">
        <Text
          variant="label-default-m"
          onBackground="neutral-weak"
          className="section-eyebrow"
        >
          HOW WE WORK
        </Text>
        <Text
          variant="display-default-m"
          onBackground="neutral-strong"
          className="section-title"
          style={{ textAlign: "center" }}
        >
          A proven process from
          <br /> assessment to optimization
        </Text>
        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
          style={{ textAlign: "center", maxWidth: "48ch" }}
        >
          Our four-phase methodology ensures every engagement starts with
          understanding and ends with measurable results.
        </Text>
      </Column>

      <Column fillWidth maxWidth="m" gap="m" id="processSteps">
        {processSteps.map((step, index) => (
          <Row
            key={index}
            className="process-step"
            padding="l"
            gap="l"
            vertical="center"
            fillWidth
          >
            <div className="process-number">
              <Text
                variant="display-default-m"
                onBackground="neutral-strong"
                style={{ fontFamily: "var(--font-questrial)" }}
              >
                {step.number}
              </Text>
            </div>
            <Column gap="xs" fillWidth flex={1}>
              <Text
                variant="heading-default-l"
                onBackground="neutral-strong"
              >
                {step.title}
              </Text>
              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {step.description}
              </Text>
            </Column>
          </Row>
        ))}
      </Column>
    </Flex>
  );
};

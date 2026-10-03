"use client";
import { Row, Text, Flex, Column } from "@once-ui-system/core";
import { testimonials } from "@/resources/data/testimonials";
import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";

export const Testimonials: React.FC = () => {
  return (
    <Flex
      fillWidth
      direction="column"
      horizontal="center"
      paddingX="l"
      paddingY="xl"
      id="testimonials"
      gap="xl"
    >
      <Column maxWidth={64} fillWidth horizontal="center" gap="s">
        <Text
          variant="label-default-m"
          onBackground="neutral-weak"
          className="section-eyebrow"
        >
          CLIENT STORIES
        </Text>
        <Text
          variant="display-default-m"
          onBackground="neutral-strong"
          className="section-title"
          style={{ textAlign: "center" }}
        >
          Results that speak for themselves
        </Text>
      </Column>

      <Column fillWidth maxWidth="m" gap="m" id="testimonialsGrid">
        {testimonials.map((testimonial, index) => (
          <Column
            key={index}
            className="testimonial-card"
            padding="l"
            gap="m"
            fillWidth
          >
            <QuotesIcon size={32} weight="fill" className="testimonial-quote-icon" />
            <Text
              variant="body-default-l"
              onBackground="neutral-medium"
              className="testimonial-quote"
            >
              "{testimonial.quote}"
            </Text>
            <Row gap="m" vertical="center" fillWidth>
              <div className="testimonial-avatar">
                <Text
                  variant="heading-default-s"
                  onBackground="neutral-strong"
                >
                  {testimonial.author.charAt(0)}
                </Text>
              </div>
              <Column gap="0">
                <Text
                  variant="label-default-m"
                  onBackground="neutral-strong"
                >
                  {testimonial.author}
                </Text>
                <Text
                  variant="label-default-xs"
                  onBackground="neutral-weak"
                >
                  {testimonial.role}, {testimonial.company}
                </Text>
              </Column>
            </Row>
          </Column>
        ))}
      </Column>
    </Flex>
  );
};

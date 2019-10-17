import React from 'react'

import { stacks } from './Data'
import { Container, StackName, Section, SectionName } from './Styled'

const StacksScreen = () => {
  return (
    <Container>
      {stacks.map((stack, stackIndex) => (
        <React.Fragment key={stackIndex}>
          <StackName>{stack.name}</StackName>
          {stack.sections.map((section, sectionIndex) => (
            <Section key={sectionIndex}>
              <SectionName>{section.name}</SectionName>
              {section.items.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={item.link}
                  target='_blank'
                >
                  {item.name}
                </a>
              ))}
            </Section>
          ))}
        </React.Fragment>
      ))}
    </Container>
  )
}

export default StacksScreen

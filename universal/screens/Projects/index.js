import React, { Component } from 'react'
import Link from 'next/link'
import { Tag } from 'antd'

import { projects } from './Data'
import { Container, ProjectItem, ProjectNameWithLink, ProjectName, ProjecDesc, InProgress, MoreToCome } from './Styled'

class ProjectsView extends Component {
  render () {
    return (
      <Container>
        {projects.map((project, index) => {
          return (
            <ProjectItem key={index}>
              {project.ready ? (
                <ProjectNameWithLink target='_blank' href={project.link}>{project.name}</ProjectNameWithLink>
              ) : (
                <ProjectName>{project.name}</ProjectName>
              )}
              {!project.ready && (
                <InProgress><Tag>Working in progress</Tag></InProgress>
              )}
              <ProjecDesc>{project.description}</ProjecDesc>
            </ProjectItem>
          )
        })}
        <MoreToCome>
          Interested to collaborate? <Link href='/contacts' passHref><a>Lets chat</a></Link>
        </MoreToCome>
      </Container>
    )
  }
}

export default ProjectsView

import React from 'react'

import WithBase from '@components/WithBase'
import ProjectsScreen from '@screens/Projects'

const ProjectsPage = () => {
  return (
    <WithBase useHeader>
      <ProjectsScreen />
    </WithBase>
  )
}

export default ProjectsPage

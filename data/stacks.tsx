// import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiKotlin,
  SiXaml,
  SiBitbucket,
  SiDocker,
  SiAndroid,
  SiSqlite,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiKubernetes,
  SiJetpackcompose,
  SiStreamlit
  
 
  
  
  
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  Android:(
    <SiAndroid
      size={iconSize}
      color="default"
    />
  ),
  Kotlin: (
    <SiKotlin
      size={iconSize}
      color="default"
    />
  ),
  XML: (
    <SiXaml
      size={iconSize}
      color="default"
    />
  ),
  JetpackCompose: (
    <SiJetpackcompose
      size={iconSize}
      color="default"
    />
  ),
  StreamLit:(
    <SiStreamlit
      size={iconSize}
      color="default"
    />
  ),
  Bitbucket:(
      <SiBitbucket
      size={iconSize}
      color="default"
      />
  ),
  Firebase: (
    <SiFirebase
      size={iconSize}
      color="default"
    />
  ),
  SQLite:(
    <SiSqlite
      size={iconSize}
      color="default"
    />
  ),

  MySQL:(
    <SiMysql
      size={iconSize}
      color="default"
    />
  ),
  
  
  
  Docker: (
    <SiDocker
      size={iconSize}
      color="default"
    />
  ),
  
  Postman: (
    <SiPostman
      size={iconSize}
      color="default"
    />
  ),
  Kubernetes:(
    <SiKubernetes
    size={iconSize}
    color="default"
    />
  ),
  
  
  
  
  
  Git: (
    <SiGit
      size={iconSize}
      color="default"
    />
  ),
  Github: (
    <SiGithub
      size={iconSize}
      color="default"
    />
  ),
  
};

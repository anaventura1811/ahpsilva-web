import { SideBarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './styles';

type Props = {
  isOpen: boolean;
  toggle: () =>  void;
}

const Sidebar = (props: Props) => {
  const { isOpen, toggle } = props;

  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="nossa-historia" onClick={toggle}>
            Nossa história
          </SidebarLink>
          <SidebarLink to="atuacao" onClick={toggle}>
            Atuação
          </SidebarLink>
          <SidebarLink to="depoimentos" onClick={toggle}>
            Depoimentos
          </SidebarLink>
          <SidebarLink to="contato" onClick={toggle}>
            Contato
          </SidebarLink>
          <SideBtnWrap>
            <SidebarRoute to="/login" onClick={toggle}>
                Login
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  );
}

export default Sidebar
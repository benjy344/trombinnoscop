import '../../styles/_page_profil.scss';
import React from 'react';

import axios from 'axios';

import { Button, Icon, Badge, Avatar, CircularProgress } from '@material-ui/core/';

class PageProfil extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="wrapper-page-profil">
        <div className="wrapper-header-profil">
            <div className="wrapper-avatar-profil">
                <Avatar className="avatarProfil">JD</Avatar>
            </div>

            <div className="wrapper-info-user">
                <h2 className="nomProfil">Jean DUPONT</h2>
                <p className="metierProfil">Graphic Designer</p>
                <p className="entrepriseProfil">Freelance</p>
                <p className="mailProfil">jean.dupont@gmail.com</p>
                <p className="numberProfil">06.12.05.27.94</p>
                <p className="siteWebProfil"><a href="#">jean-dupont.fr</a></p>
            </div>

            <div className="wrapper-competences-user">
                <div className="wrapper-badge-competences-user">
                    <span>3</span>
                    <CircularProgress variant="static" value={90} className="badge-competences-user" />
                </div>
                <div className="wrapper-badge-competences-user">
                    <span>3</span>
                    <CircularProgress variant="static" value={50} className="badge-competences-user" />
                </div>
                <div className="wrapper-badge-competences-user">
                    <span>3</span>
                    <CircularProgress variant="static" value={60} className="badge-competences-user" />
                </div>

                <div>
                    <p>Bio: </p>
                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
            </div>

            <button className="btn-close"></button>
        </div>
      </main>
    );
  }
}

export default PageProfil;

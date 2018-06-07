import '../../styles/_page_profil.scss';
import React from 'react';

import axios from 'axios';

import { Button, Icon, Badge, Avatar, CircularProgress, Dialog } from '@material-ui/core/';

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

                    <div className="wrapper-bio-user">
                        <p>Bio: </p>
                        <p className="text-bio-user">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum gravida libero non rhoncus. Integer rhoncus sit amet odio quis vestibulum. Aenean et lectus porttitor, imperdiet elit vitae, pretium nisi. Fusce id tortor nibh. Suspendisse sed dui ac sapien condimentum hendrerit id accumsan libero. Nunc fringilla, lacus et ullamcorper elementum, metus erat venenatis purus, non egestas est odio ac turpis. Cras sed euismod quam, at lobortis orci. Vestibulum quis mi ut metus scelerisque pretium in ut sem. Sed quis mi ullamcorper, aliquet purus vitae, blandit purus. Duis suscipit scelerisque augue, nec egestas nisl ultrices non.</p>
                    </div>
                </div>

                <button className="btn-close"></button>
            </div>

            <div className="wrapper-body-profil">
                <div className="wrapper-competences-profil">
                    <h3>Compétences</h3>

                    <div className="wrapper-badge-competence">
                        <p className="badge-competence">#UX</p>
                    </div>

                    <div className="wrapper-badge-competence">
                        <p className="badge-competence">#DA</p>
                    </div>

                    <div className="wrapper-badge-competence">
                        <p className="badge-competence">#TEXTILE</p>
                    </div>

                    <div className="wrapper-badge-competence">
                        <p className="badge-competence">#PRINT</p>
                    </div>
                </div>

                <div className="wrapper-aides-profil">
                    <h3>Jean peut aider sur :</h3>

                    <div className="wrapper-badge-aide">
                        <p className="badge-aide">UX</p>
                    </div>

                    <div className="wrapper-badge-aide">
                        <p className="badge-aide">La découpe laser</p>
                    </div>

                    <div className="wrapper-badge-aide">
                        <p className="badge-aide">Illustrator</p>
                    </div>
                </div>
            </div>

            <Button className="btn-contacter" variant="contained">Contacter</Button>
        </main>
    );
  }
}

export default PageProfil;

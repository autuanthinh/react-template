import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';

import Helmet from '../../_utils/helmet';
import imgArchitect from '../../../images/architect.png';

class HomePage extends PureComponent {
    render() {
        return (
            <div id="homePage">
                <Helmet title="Home" description="Home page descript" />
                <div className="container">
                    <h4 className="title">Guide</h4>

                    <LazyLoad height={200} offset={200} once>
                        <img src={imgArchitect} alt="architect" />
                    </LazyLoad>

                    <div className="mainContent">
                        <div className="eachRow">
                            <strong>Operating system: </strong>
                            <span>Mac OS</span>
                        </div>
                        <div className="eachRow">
                            <dl>
                                <dt>
                                    <strong>Install: </strong>
                                </dt>
                                <dd>
                                    - Open Terminal, cd leflair project, type <strong>yarn install</strong> or <strong>npm i</strong>
                                </dd>
                                <dd>
                                    - start project: type <strong>yarn start-dev</strong> or <strong>npm run start-dev</strong>
                                </dd>
                                <dd>
                                    - build project: type <strong>yarn build</strong> or <strong>npm run build</strong>
                                </dd>
                            </dl>
                        </div>
                        <div className="eachRow">
                            <strong>Design: </strong>
                            <span>Support mobile, table, pc</span>
                        </div>
                        <div className="eachRow">
                            <dl>
                                <dt>
                                    <strong>
                                        <strong>Structure : </strong>{' '}
                                    </strong>
                                </dt>
                                <dd>
                                    - As image above, all techniques that i used, and some techniques i add more as redux-form,
                                    react-lazyload, etc...
                                </dd>
                                <dd>- your cart menu, when quantity more than 0 must be able to click</dd>
                                <dd>
                                    - chrome tab network (js), check slipt file bundle.js when user click menu on top right (avoid all file
                                    js build into one bundle.js file, when scale up project, this is useful)
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;

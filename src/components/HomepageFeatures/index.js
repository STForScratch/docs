import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Preview Your Changes',
    Png: 'https://stforscratch.github.io/data/settings.png',
    description: (
      <>
        Easily view your changes in ScratchTools as you make them! Test out new features or user interfaces!
      </>
    ),
  },
  {
    title: 'Easy to Develop',
    Png: 'https://stforscratch.github.io/data/vscode.png',
    description: (
      <>
        Everything is simple when it comes to making changes- all our code is in HTML, CSS, and Javascript!
      </>
    ),
  },
  {
    title: 'Show Your Changes',
    Png: 'https://stforscratch.github.io/data/github.png',
    description: (
      <>
        Easily open pull requests with your own changes, that way our developers can review and merge them!
      </>
    ),
  },
];

function Feature({Png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={Png}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { EventType } from '@highlight-run/rrweb';
import { customEvent } from '@highlight-run/rrweb/typings/types';
import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DemoContext } from '../../../DemoContext';
import { useGetSessionQuery } from '../../../graph/generated/hooks';
import ReplayerContext from '../ReplayerContext';
import styles from './index.module.scss';
import { ReactComponent as LaptopIcon } from '../../../static/laptop.svg';

interface Props {
    replayerWidth?: number;
}

export const SessionDetails = ({ replayerWidth }: Props) => {
    const { demo } = useContext(DemoContext);
    const { session_id } = useParams<{ session_id: string }>();

    const { data } = useGetSessionQuery({
        variables: {
            id: demo ? process.env.REACT_APP_DEMO_SESSION ?? '0' : session_id,
        },
        context: { headers: { 'Highlight-Demo': demo } },
    });
    const { events, replayer } = useContext(ReplayerContext);
    const [currentUrl, setCurrentUrl] = useState<string>('');

    // Finds the first Navigate event to set the initial URL.
    useEffect(() => {
        let initialUrl = '';
        let index = 0;
        let event = events[index];

        while (initialUrl === '' || index < events.length) {
            if (event.type === EventType.Custom) {
                const typedEvent = event as customEvent<string>;

                if (typedEvent.data.tag === 'Navigate') {
                    initialUrl = typedEvent.data.payload;
                    break;
                }
            }
            index++;
            event = events[index];
        }

        setCurrentUrl(initialUrl);
    }, [events]);

    useEffect(() => {
        if (replayer) {
            replayer.on('event-cast', (e) => {
                const event = e as customEvent<string>;
                if (event.data.tag === 'Navigate') {
                    setCurrentUrl(event.data.payload);
                }
            });
        }
    }, [replayer]);

    return (
        <div className={styles.wrapper} style={{ width: replayerWidth }}>
            <span className={classNames(styles.token, styles.urlToken)}>
                <a href={currentUrl} className={styles.urlToken}>
                    {currentUrl}
                </a>
            </span>
            {data?.session && (
                <span className={styles.token}>
                    <LaptopIcon className={styles.icon} />
                    {data.session.os_name} - {data.session.browser_name}
                </span>
            )}
        </div>
    );
};

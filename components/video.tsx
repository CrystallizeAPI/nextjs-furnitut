'use client';
import { Video as CrystallizeVideo } from '@crystallize/reactjs-components';
import '@crystallize/reactjs-components/assets/video/styles.css';

export const Video = (video: any, { className }: { className: string }) => {
    return (
        <div className={`${className}`}>
            <CrystallizeVideo {...video} thumbnmailProps={{ sizes: '(max-width: 700px) 90vw, 700px' }} />
        </div>
    );
};

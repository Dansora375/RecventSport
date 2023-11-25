import TimelineHeader from './components/timelineHeader';
import Intro from './components/intro';
import Photos from './components/photos';
import MainPost from './components/mainPost';
import NavbarProfile from './navbar';

export default function ProfilePage() {
  return (
    <div className="antialiased bg-gray-20">
      <NavbarProfile/>
      <TimelineHeader />

      <div className="px-52 grid grid-cols-12 pt-4 gap-4 z-0 pb-56">
        <div className="col-span-4 col-start-1 row-start-1 space-y-4">
          <Intro />
          <Photos />
        </div>
        <div className="flex-row row-start-1 col-span-8 col-start-5 space-y-4">
          {/* <CreatePost /> */}
          {/* <Posts /> */}
          <MainPost />
        </div>
      </div>
    </div>
  );
}
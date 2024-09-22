import clsx from "clsx";
import s from "./Profile.module.css";
const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <section className={s.card}>
        <div className={s.imgWrapper}>
          <img src={user.image} />
        </div>
        <h2 className={s.fullname}>
          {user.lastName} {user.firstName}
        </h2>
        <p>Email: {user.email} </p>
        <p className={clsx(s.age, user.age > 18 ? s.green : s.red)}>
          Age: {user.age}
        </p>
      </section>
    </div>
  );
};

export default Profile;

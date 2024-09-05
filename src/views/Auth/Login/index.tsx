import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-5xl text-red-500">Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "5px" }}>
        Belum Punya Akun? Register <Link href={"/auth/register"}>Disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;

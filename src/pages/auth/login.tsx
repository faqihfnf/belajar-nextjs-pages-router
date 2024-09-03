import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const handlerLogin = () => {
    router.push("/product");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum Punya Akun? Register <Link href={"/auth/register"}>Disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;

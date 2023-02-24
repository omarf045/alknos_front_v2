import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import swal from "sweetalert2";

import { useRouter } from "next/router";

import { VerifyLayout } from "./loginRegisterComponent/VerifyLayout";
import { Button } from "./loginRegisterComponent/Button";
import { TextField } from "./loginRegisterComponent/Fields";
import { Logo } from "./loginRegisterComponent/Logo";

export default function Verify() {

  let router = useRouter();

  const handleSubmit = (event) => {

    event.preventDefault();     

    let token_query = router.query["token"];
    let token_decoded = token_query.replaceAll("%3D","=").replaceAll("%2F","/")
    let url_array = token_decoded.split("/");
    
    const baseURL = "http://127.0.0.1:8000/api/v1.0/verify";

    let uid = url_array[0];
    let token = url_array[1];

    console.log(uid);
    console.log(token);

    const formData = new FormData();
    formData.append("uid", uid);
    formData.append("token", token);

    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
  }

    axios
      .get(baseURL, formData,config)
      .then((response) => {
        console.log(response.data);
        new swal({
          title: "Verificacion correcta",
          icon: "success",
          text: JSON.stringify(response.data)
            .replaceAll("[", "")
            .replaceAll("]", "")
            .replaceAll("{", "")
            .replaceAll("}", "")
            .replaceAll(",", "\n")
            .replaceAll('"', ""),
        });
      })
      .catch((error) => {
        console.log(error.response.data);

        new swal({
          title: "Error",
          icon: "error",
          text: JSON.stringify(error.response.data)
            .replaceAll("[", "")
            .replaceAll("]", "")
            .replaceAll("{", "")
            .replaceAll("}", "")
            .replaceAll(",", "\n")
            .replaceAll('"', "")
            .replaceAll(
              "non_field_errors:Unable to log in with provided credentials.",
              "No se pudieron ingresar con las credenciales provistas."
            ),
        });
      });
  };

  return (
    <div className="h-full bg-white">
      <Head>
        <title>Sign In - Alknos</title>
      </Head>

      <VerifyLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="w-auto h-10" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Accede a tu cuenta
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Regístrate
              </Link>{" "}
              por un plan gratuito
            </p>
          </div>
        </div>
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-blue-600 duration-300 hover:text-blue-400"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Inicia Sesión <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </VerifyLayout>
      <div>
        <Button
          onClick={handleSubmit}
          variant="solid"
          color="blue"
          className="w-full"
        >
          <span>
            Inicia Sesión <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </div>
  );
}

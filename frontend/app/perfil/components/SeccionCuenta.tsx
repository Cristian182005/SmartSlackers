"use client";

import { Profile } from "../page";
import { useTranslation } from "@/lib/i18n";

interface SeccionCuentaProps {
  profile: Profile;
  getInitials: (name: string) => string;
}

export default function SeccionCuenta({ profile, getInitials }: SeccionCuentaProps) {
  const { t } = useTranslation();

  const datosAdicionales: { label: string; key: keyof Profile }[] = [
    { label: t("perfil.carreraInteres"), key: "carrera"  },
    { label: t("perfil.dni"),            key: "dni"      },
    { label: t("perfil.telefono"),       key: "telefono" },
    { label: t("perfil.modalidadIngreso"), key: "modalidad" },
    { label: t("perfil.sede"),           key: "sede"     },
  ];

  const extras = datosAdicionales.filter((d) => profile[d.key]);

  return (
    <div className="space-y-6">
      {/* ── Card de estado ── */}
      <div className="rounded-[2rem] bg-gradient-to-br from-red-600 to-rose-500 p-6 text-white shadow-xl">
        <p className="text-sm uppercase tracking-[0.24em]">{t("perfil.estadoPerfil")}</p>
        <p className="mt-4 text-3xl font-bold">{t("perfil.activo")}</p>
        <p className="mt-3 text-sm text-red-100">
          {t("perfil.cuentaRegistrada")}
        </p>
      </div>

      {/* ── Datos personales ── */}
      <div className="space-y-3 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
          {t("perfil.datosPersonales")}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: t("perfil.nombre"),        value: profile.nombre        },
            { label: t("perfil.correo"),        value: profile.email         },
            { label: t("perfil.rol"),           value: profile.rol           },
            { label: t("perfil.fechaRegistro"), value: profile.fechaRegistro },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
              <p className="mt-3 break-all text-xl font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        {extras.length > 0 && (
          <div className="grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2">
            {extras.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-xl font-semibold text-slate-900">{profile[item.key] as string}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

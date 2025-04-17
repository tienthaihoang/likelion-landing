"use client";

import { HTMLAttributes, ReactNode, useContext } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { cn, formatNumber } from "@/lib/utils";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import CourseSectionHeading from "./CourseSectionHeading";

interface CourseTuitionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  slug: string;
  priority?: boolean;
  action: {
    label: string;
    href: string;
  };
  option: number;
  children: ReactNode;
}

interface CoursePaymentMethods {
  slug: string;
  payment_methods?: {
    once: {
      origin: number;
      discounted?: number | undefined;
    };
    monthly: {
      times: number;
      origin: number;
    };
  };
}

function CoursePaymentMethodRow({
  title,
  priority = false,
  slug,
  action,
  className,
  children,
  option,
  ...props
}: CourseTuitionProps) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <div
      className={cn(
        "p-8 sm:p-12 rounded-2xl flex-1 h-[350px] flex flex-col",
        priority
          ? "bg-gradient-to-r from-[#FFAE6C] to-[#FF7100] text-muted"
          : "bg-orange-100",
        className
      )}
      {...props}
    >
      {/* <div className="flex mb-4">
        <div className="px-4 py-2 text-sm font-bold rounded-lg bg-primary/10">
          Lựa chọn {option}
        </div>
      </div> */}
      <h5 className="mb-8 text-2xl font-bold">{title}</h5>
      <div className="flex flex-col gap-6 mt-auto">
        <div className="space-y-1">{children}</div>
        <div className="">
          <Button
            size="lg"
            className="w-full px-10 py-6 text-base font-bold"
            onClick={() => setDialogOpen(true)}
            asChild
          >
            <Link href={action.href} id={`payment-${option}-${slug}`}>
              {action.label}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function CoursePaymentMethods({
  slug,
  payment_methods,
}: CoursePaymentMethods) {
  if (!payment_methods) return null;

  return (
    <section id="payment">
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="space-y-16">
          <CourseSectionHeading className="text-center">
            Phương thức thanh toán
          </CourseSectionHeading>
          <div className="flex flex-col gap-8 md:flex-row">
            <CoursePaymentMethodRow
              title="Thanh toán một lần"
              action={{
                label: "Đăng ký",
                href: `/register?course=${slug}`,
              }}
              slug={slug}
              option={1}
              priority
            >
              {payment_methods.once.discounted ? (
                <div className="space-y-2">
                  <div className="line-through">
                    {formatNumber(payment_methods.once.origin)} VNĐ
                  </div>
                  <div className="text-3xl font-bold lg:text-4xl">
                    {formatNumber(payment_methods.once.discounted)} VNĐ
                  </div>
                </div>
              ) : (
                <div className="flex items-start space-x-2">
                  <div className="text-3xl font-bold lg:text-4xl">
                    {formatNumber(payment_methods.once.origin)} VNĐ
                  </div>
                </div>
              )}
            </CoursePaymentMethodRow>
            <CoursePaymentMethodRow
              option={2}
              title={`Thanh toán thành ${payment_methods.monthly.times} đợt`}
              slug={slug}
              action={{
                label: "Tìm hiểu thêm",
                href: `/register?course=${slug}`,
              }}
            >
              <div className="text-muted-foreground">Chỉ còn</div>
              <div className="flex items-end space-x-2">
                <div className="text-3xl font-bold lg:text-4xl">
                  {formatNumber(payment_methods.monthly.origin)} VNĐ
                </div>
                <div className="font-medium">/ tháng</div>
              </div>
            </CoursePaymentMethodRow>
          </div>
        </div>
      </div>
    </section>
  );
}

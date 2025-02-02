import React from "react";
import { Link, LinkProps, NavLink } from "react-router";
import cls from "./AppLink.module.scss";
import { classNames } from "../../lib/classNames/classNames";

export enum AppLinkVariant {
  DEFAULT = "default",
  NAV = "nav",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  activeClassName?: string;
}

const AppLink = (props: AppLinkProps) => {
  const {
    className,
    variant = AppLinkVariant.DEFAULT,
    to,
    children,
    activeClassName = "",
    ...otherProps
  } = props;

  if (variant === AppLinkVariant.DEFAULT) {
    return (
      <Link
        className={classNames(cls.AppLink, {}, [className])}
        to={to}
        {...otherProps}
      >
        {children}
      </Link>
    );
  } 
  return (
    <NavLink to={to} className={({isActive}) => classNames(cls.AppLink, {[activeClassName]: isActive}, [className])} {...otherProps}>
      {children}
    </NavLink>
  )
};

export default AppLink;

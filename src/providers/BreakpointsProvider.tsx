import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Breakpoint, Theme, useMediaQuery } from '@mui/material';

interface BreakpointContextInterface {
  currentBreakpoint: Breakpoint;
  isUp: (key: Breakpoint | number) => boolean;
  isDown: (key: Breakpoint | number) => boolean;
  isOnly: (key: Breakpoint | number) => boolean;
  isBetween: (start: Breakpoint | number, end: Breakpoint | number) => boolean;
}

export const BreakpointContext = createContext({} as BreakpointContextInterface);

const BreakpointsProvider = ({ children }: PropsWithChildren) => {
  const isXs = useMediaQuery<Theme>(theme => theme.breakpoints.between('xs', 'sm'));
  const isSm = useMediaQuery<Theme>(theme => theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery<Theme>(theme => theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery<Theme>(theme => theme.breakpoints.between('lg', 'xl'));
  const isXl = useMediaQuery<Theme>(theme => theme.breakpoints.up('xl'));

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs');

  useEffect(() => {
    if (isXs) setCurrentBreakpoint('xs');
    else if (isSm) setCurrentBreakpoint('sm');
    else if (isMd) setCurrentBreakpoint('md');
    else if (isLg) setCurrentBreakpoint('lg');
    else if (isXl) setCurrentBreakpoint('xl');
  }, [isXs, isSm, isMd, isLg, isXl]);

  // Optional: helper functions using the same hook logic (don't call useMediaQuery again)
  const isUp = (key: Breakpoint | number) => {
    const map = {
      xs: isSm || isMd || isLg || isXl,
      sm: isMd || isLg || isXl,
      md: isLg || isXl,
      lg: isXl,
      xl: isXl,
    } as Record<string, boolean>;
    return map[key as string] ?? false;
  };

  const isDown = (key: Breakpoint | number) => {
    const map = {
      xs: isXs,
      sm: isXs || isSm,
      md: isXs || isSm || isMd,
      lg: isXs || isSm || isMd || isLg,
      xl: true,
    } as Record<string, boolean>;
    return map[key as string] ?? false;
  };

  const isOnly = (key: Breakpoint | number) => {
    const map = {
      xs: isXs,
      sm: isSm,
      md: isMd,
      lg: isLg,
      xl: isXl,
    } as Record<string, boolean>;
    return map[key as string] ?? false;
  };

  const isBetween = (start: Breakpoint | number, end: Breakpoint | number) => {
    const map = {
      'xs-sm': isXs,
      'sm-md': isSm,
      'md-lg': isMd,
      'lg-xl': isLg,
    } as Record<string, boolean>;
    return map[`${start}-${end}`] ?? false;
  };

  return (
    <BreakpointContext.Provider
      value={{
        currentBreakpoint,
        isUp,
        isDown,
        isOnly,
        isBetween,
      }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpoints = () => useContext(BreakpointContext);

export default BreakpointsProvider;

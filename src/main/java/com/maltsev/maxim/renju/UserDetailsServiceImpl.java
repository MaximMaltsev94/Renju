package com.maltsev.maxim.renju;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return new User("maxim", "$2a$11$Alk4AKR8ejSHRNGqXCv4FeM4C0ugiGwPwVf8cfRfaOCXBpmb9.qzi", AuthorityUtils.createAuthorityList("PLAYER"));
    }
}

<?php
/**
 * WordPress基础配置文件。
 *
 * 这个文件被安装程序用于自动生成wp-config.php配置文件，
 * 您可以不使用网站，您需要手动复制这个文件，
 * 并重命名为“wp-config.php”，然后填入相关信息。
 *
 * 本文件包含以下配置选项：
 *
 * * MySQL设置
 * * 密钥
 * * 数据库表名前缀
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/zh-cn:%E7%BC%96%E8%BE%91_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL 设置 - 具体信息来自您正在使用的主机 ** //
/** WordPress数据库的名称 */
define( 'DB_NAME', 'dou7com' );

/** MySQL数据库用户名 */
define( 'DB_USER', 'dou7com' );

/** MySQL数据库密码 */
define( 'DB_PASSWORD', 'jinfyzs12hmss22' );

/** MySQL主机 */
define( 'DB_HOST', 'localhost' );

/** 创建数据表时默认的文字编码 */
define( 'DB_CHARSET', 'utf8mb4' );

/** 数据库整理类型。如不确定请勿更改 */
define( 'DB_COLLATE', '' );

/**#@+
 * 身份认证密钥与盐。
 *
 * 修改为任意独一无二的字串！
 * 或者直接访问{@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org密钥生成服务}
 * 任何修改都会导致所有cookies失效，所有用户将必须重新登录。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'P[KG|+&xXSb1zOG6&bgyhk{B8SA+`:JfW ser8/S`mi[_5`D.y/X[w0Y[i@qrSF6' );
define( 'SECURE_AUTH_KEY',  'LF?2]|+,+1uweN{/E05aw)[nTCY[!;orJ1Z#CKpK^}|_DAof25Rmb:AZ=nhEKfSG' );
define( 'LOGGED_IN_KEY',    '7x]cIyJ1vkE$ub*]`;hJt~(?95f-eodHI]cX?g#XK2la4.?Mj~GTXH2aML&9DGBk' );
define( 'NONCE_KEY',        'o A%^{`M~lGUI2&)<McEr/xaJQb7DDYcD9W?ps(`q_/c&q_m~D1v#6y**,DF/,xZ' );
define( 'AUTH_SALT',        '?LV`PL`pLRB<GOe,.t2YC-@lhD-jVA?9yUKVq6v9g[_6`rbxa]DBFd26Y<Flg?0j' );
define( 'SECURE_AUTH_SALT', 'X]nVL9K0z.)gVGp i-RNv7zH!DtXeD<d6<2U(j}-2T]}Yz.XC&Q6t.%I/E`dw $R' );
define( 'LOGGED_IN_SALT',   'hjHZk=@LxKYSObZ0FrpUxop)jho`?hf?)OlXMB~hP}0cg6 &3i.H2CT9%%g[nv@Q' );
define( 'NONCE_SALT',       '6B%MJZ`1T7SB>lJDVqP+@T<?5DPFSs.0Z3Ms{aLo`c]mitiaV&`az{CLy4zf7A!?' );

/**#@-*/

/**
 * WordPress数据表前缀。
 *
 * 如果您有在同一数据库内安装多个WordPress的需求，请为每个WordPress设置
 * 不同的数据表前缀。前缀名只能为数字、字母加下划线。
 */
$table_prefix = 'd7_';

/**
 * 开发者专用：WordPress调试模式。
 *
 * 将这个值改为true，WordPress将显示所有用于开发的提示。
 * 强烈建议插件开发者在开发环境中启用WP_DEBUG。
 *
 * 要获取其他能用于调试的信息，请访问Codex。
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* 好了！请不要再继续编辑。请保存本文件。使用愉快！ */

/** WordPress目录的绝对路径。 */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** 设置WordPress变量和包含文件。 */
require_once( ABSPATH . 'wp-settings.php' );

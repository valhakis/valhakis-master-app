call plug#begin('~/.vim/plugged')
Plug 'https://github.com/mattn/emmet-vim'
"Plug 'https://github.com/xolox/vim-colorscheme-switcher'
Plug 'junegunn/vim-easy-align'
Plug 'https://github.com/embear/vim-localvimrc'
Plug 'https://github.com/leshill/vim-json'
Plug 'https://github.com/elzr/vim-json'
Plug 'https://github.com/cakebaker/scss-syntax.vim'
Plug 'https://github.com/tpope/vim-surround'
Plug 'https://github.com/Yggdroot/indentLine'
Plug 'https://github.com/junegunn/vim-github-dashboard.git'
"Plug 'https://github.com/Valloric/MatchTagAlways'
"Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }
Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }
Plug 'fatih/vim-go', { 'tag': '*' }
Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }
Plug 'https://github.com/jelera/vim-javascript-syntax'
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'https://github.com/jiangmiao/auto-pairs'
Plug '~/my-prototype-plugin'
Plug 'https://github.com/flazz/vim-colorschemes'
Plug 'https://github.com/keith/tmux.vim'
"Plug 'https://github.com/ap/vim-css-color'
Plug 'https://github.com/pangloss/vim-javascript'
Plug 'https://github.com/ayu-theme/ayu-vim'
Plug 'https://github.com/scrooloose/nerdtree'
Plug 'https://github.com/jistr/vim-nerdtree-tabs'
Plug 'https://github.com/Xuyuanp/nerdtree-git-plugin'
Plug 'https://github.com/kien/ctrlp.vim'
Plug 'https://github.com/vim-syntastic/syntastic'
Plug 'https://github.com/easymotion/vim-easymotion'
Plug 'https://github.com/pangloss/vim-javascript'
call plug#end()

set t_Co=256

set tabstop=3 shiftwidth=3 softtabstop=3 expandtab hlsearch nowrap

colorscheme wombat
"colorscheme molokai
hi comment ctermfg=red
hi Search ctermfg=red ctermbg=none

let g:ctrlp_custom_ignore = 'node_modules\|.git'
let g:ctrlp_show_hidden = 1

let g:nerdtree_tabs_open_on_console_startup=1
let g:NERDTreeWinPos = "right"
let g:NERDTreeWinSize = 25 
let NERDTreeMapActivateNode='<space>'

let NERDTreeShowHidden=1

set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_cpp_config_file = 'C:\syntastic\configuration'
let g:syntastic_cpp_compiler = "cl"


set mouse=n

nmap ,edit :tabedit ~/.vimrc <cr>
nmap ,so :so % <cr>
nmap ,make :w \| !mingw32-make <cr>
nmap ,run :w \| !mingw32-make run <cr>
nmap \mr :w \| !mingw32-make && mingw32-make run <cr>
nmap qq :q <cr>
nmap ,install :w \| so % \| PlugInstall <cr>
nmap ,clean :w \| so % \| PlugClean <cr>
map ,so :so % <cr>
let g:user_emmet_leader_key=','

set backspace=2

set backupdir=~/.vim/tmp
set directory=~/.vim/tmp

map <F10> :echo "hi<" . synIDattr(synID(line("."),col("."),1),"name") . '> trans<'
\ . synIDattr(synID(line("."),col("."),0),"name") . "> lo<"
\ . synIDattr(synIDtrans(synID(line("."),col("."),1)),"name") . ">"<CR>

hi PreProc ctermfg=53


if has("multi_byte")
   if &termencoding == ""
      let &termencoding = &encoding
   endif
   set encoding=utf-8
   setglobal fileencoding=utf-8
   "setglobal bomb
   set fileencodings=ucs-bom,utf-8,latin1
endif

set guifont=Courier\ New

au BufNewFile,BufRead .jshintrc set filetype=json

let g:syntastic_html_tidy_ignore_errors = [ 'proprietary attribute', 'content occurs after end of body'  ]

let g:localvimrc_ask = 1
"let g:localvimrc_whitelist = '.*'
"let g:localvimrc_blacklist = ''
"let g:localvimrc_sourced_once = 1
let g:localvimrc_persistent = 2
"let g:localvimrc_file = '.lvimrc'
"let g:localvimrc_whitelist = []
